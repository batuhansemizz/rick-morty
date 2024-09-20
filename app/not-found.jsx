import React from 'react'
import Link from 'next/link'
export default function notFound() {
  return (
    <div>
      <h3>Üzgünüz Sayfa bulunamadı</h3>
      <p>hatanın nedenin araştırıyoruız</p>
      <Link className='btn' href="/" >Geri Dön</Link>
    </div>
  )
}
