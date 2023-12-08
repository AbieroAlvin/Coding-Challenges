import {useDrag} from 'react-dnd'

const Picture = ({id, url}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "image",
    item: {id:id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), 
    })
  }))
  return (
    <img
    ref={drag}
     src={url} className={`${ isDragging ? 'border-[5px] border-pink-300' : 'border-[5px] border-blue-200'}`}/>
  )
}

export default Picture