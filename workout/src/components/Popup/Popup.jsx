import { useState } from 'react'
import styles from './Popup.module.scss';

const Popup = ({isOpen, onClose}) => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
  })

  const {popupContainer, popup, popupClose, form, formItem, formField, formSubmit} = styles;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevVal) => ({ ...prevVal, [name]:value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contactData);
  }

  return (
    <>
      {isOpen && (
        <div className={popupContainer}>
          <div className={popup}>
            <button className={popupClose} onClick={onClose}>X</button>
            <form className={form} onSubmit={handleSubmit}>
              <div className={formItem}>
                <input className={formField} type="text" name="name" placeholder="Name..." value={contactData.name} onChange={handleChange} />
              </div>
              <div className={formItem}>
                <input className={formField} type="email" name="email" placeholder="Email..." value={contactData.email} onChange={handleChange} />
              </div>
              <button className={formSubmit} type='submit'>Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup