import { useState } from 'react'
import { CustomButtom } from '../customButtom/CustomButtom'
import { Modal } from '../customModal/Modal'
export function NewProducto() {
  const [openModal, setOpenModal] = useState(false)
  const open = () => setOpenModal(true)
  const close = () => setOpenModal(false)

  const clickFunc = (clickAction) =>{
    setOpenModal(true)
  }
  return (
    <div style={{display: 'flex', justifyContent:'center', width:'100%'}}>
        <CustomButtom clickFunc={clickFunc} clickAction={''} texto={'Agregar'}/>
        <Modal isOpen = {openModal} onClose={close}>
          <h2> HOLITA </h2>
        </Modal>
    </div>
  )
}
