import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from './ProductCard.jsx'
import { filters } from './FilterData.js'
import FilterListIcon from '@mui/icons-material/FilterList'
import CircularProgress from '@mui/material/CircularProgress'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { findProducts } from '../../../State/Product/Action.js'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'

const sortOptions = [
    { name: 'Price: Low to High', value: 'price_low' },
    { name: 'Price: High to Low', value: 'price_high' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [loading, setLoading] = useState(true) // Loading state

    const location = useLocation()
    const navigate = useNavigate()
    const decodedQueryString = decodeURIComponent(location.search)
    const searchParams = new URLSearchParams(decodedQueryString)

    const stock = searchParams.get("stock")
    const sizeValue = searchParams.get("size")
    const sortValue = searchParams.get("sort")
    const colorValue = searchParams.get("color")
    const priceValue = searchParams.get("price")
    const pageNumber = searchParams.get("page") || 1
    const discountValue = searchParams.get("discount")

    const param = useParams()
    const dispatch = useDispatch()
    const { product } = useSelector((state) => state)

    useEffect(() => {
        setLoading(true)
        const [minPrice, maxPrice] = priceValue == null ? [0, 10000] : priceValue.split("-").map(Number)
        const data = {
            category: param.levelThree,
            colors: colorValue || [],
            sizes: sizeValue || [],
            minPrice,
            maxPrice,
            minDiscount: discountValue || 0,
            sort: sortValue || 'price_low',
            pageNumber: typeof pageNumber === 'string' ? parseInt(pageNumber) - 1 : 0,
            pageSize: 10,
            stock: stock,
        }
        dispatch(findProducts(data)).then(() => setLoading(false))
    }, [param.levelThree, colorValue, sizeValue, priceValue, discountValue, sortValue, pageNumber, stock, dispatch])

    const handlePaginationChange = (event, value) => {
        const searchParams = new URLSearchParams(location.search)
        searchParams.set("page", value)
        navigate({ search: `?${searchParams.toString()}` })
    }

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-black/25 transition-opacity" />
                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel transition className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" onClick={() => setMobileFiltersOpen(false)} className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">Products</h2>

                        {loading ? (
                            <div className="flex justify-center items-center h-[50vh]">
                                <CircularProgress />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                                {/* Filters */}
                                <div>
                                    <div className='py-10 flex justify-between items-center'>
                                        <h1 className='text-lg opacity-70 font-bold'>Filters</h1>
                                        <FilterListIcon />
                                    </div>
                                    <form className="hidden lg:block">
                                        {filters.map((section) => (
                                            <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                                        <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                                                    </span>
                                                </DisclosureButton>
                                            </Disclosure>
                                        ))}
                                    </form>
                                </div>

                                {/* Product grid */}
                                <div className="w-full lg:col-span-4">
                                    <div className='flex flex-wrap bg-white py-5 justify-center'>
                                        {product?.products?.content?.map((item, index) => <ProductCard key={index} product={item} />)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {!loading && (
                        <section className='w-full px-[3-6rem]'>
                            <div className='px-4 py-5 flex justify-center'>
                                <Pagination count={product?.products?.totalPages} onChange={handlePaginationChange} color="secondary" />
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    )
}
