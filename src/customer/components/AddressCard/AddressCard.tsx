function AddressCard({address}:any){
  return (
    <div>
      <div className="space-y-3">
        <div className="flex">
        <p>Delivered To: </p>
        <p className="font-semibold ml-2">{address?.firstName && address?.lastName? address?.firstName + ' ' + address?.lastName  : 'xxxxxx'}</p>
        </div>
        <div className="flex">
        <p>Address: </p>
        <p className="font-semibold ml-2">{address?.state ? address?.streetAddress+', '+address?.city+', '+address?.state+', '+address?.zipCode: 'xxxxxx'} </p>
        </div>
        <div className="flex">
          <p className="mr-2">Phone Number: </p>
          <p className="font-semibold ">{address?.mobile? address?.mobile : 'xxxxxxxx'}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard;
