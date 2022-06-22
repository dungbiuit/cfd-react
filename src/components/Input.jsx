import React from 'react'

export default function Input({label, placeholder, required, onChange, error, defaultValue}) {
  return (
    <>
                <label>
                  <p>
                    {label}{required?<span>*</span>: null}
                  </p>
                  <input defaultValue={""} type="text" placeholder={placeholder} onChange={onChange} />
                  {error.name && <p>{error.name}</p>}
                </label>
    </>
  )
}
