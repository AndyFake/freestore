import {store} from '/images'
const imageList = store.split('\n').map(line=>{
  const directories = line.split('/')
  return directories[directories.length-1]
})

inmages = imageList.map(imageName=>{
  const imageUrl = '/images/'+imageName
  return(
    <img src={imageUrl}/>
  )
})
