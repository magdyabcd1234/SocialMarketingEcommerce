import React from 'react'

const GoogleMap = () => {
  return (
    <div>
      <section className="pb-20 lg:pb-[100px]">
            <div className="container-custom">
                <div className="overflow-hidden rounded-[20px]">
                    <iframe
  title="Office location"
  src="https://www.google.com/maps?q=Mansoura,Egypt&output=embed"
  className="h-[450px] w-full grayscale"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
                </div>
            </div>
      </section>
    </div>
  )
}

export default GoogleMap
