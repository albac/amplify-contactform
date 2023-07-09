'use client';

import { useState, useEffect } from 'react';
import ContactFormCreateForm from '@/src/ui-components/ContactFormCreateForm';
import AmplifyUITheme from './amplifyuitheme';
import { Modal } from './modal';


export default function CustomContact(){

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  },[setShowModal])

  return(
  <>
    <button onClick={() => setShowModal(true)} >
      Contact me
    </button>
    {showModal ? (
      <Modal>
        <AmplifyUITheme>
          <ContactFormCreateForm 
            onSuccess={() => setShowModal(false)}
            backgroundColor="neutral.40"
            borderRadius="6px"
            width="40rem"
          />
        </AmplifyUITheme>
      </Modal>
      ): null}
  </>
  )
}
