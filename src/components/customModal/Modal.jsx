import '../../index.css'

export function Modal ({ isOpen, onClose, children})  {
    if (!isOpen) return null;
  return (
    <div className='modal-backdrop'>
        <div className='modal' role='dialog'>
            
        <button onClick={onClose}>XXXXX</button>
        <div className='modal-content'>
            {children}
            </div>
        </div>
        
    </div>
 )
}
