import React from 'react'
import Form from '@/components/Contact/Form'
import Map from '@/components/Contact/Map'
import Head from 'next/head'

const Contact = () => {
  return (
    <main>
        <Head>
            <title>Satori Specialty Coffee - Contact</title>
            <meta name="description" content="Satori Specialty Coffee offers meticulously sourced, ethically grown, and perfectly roasted beans to elevate your coffee experience." />
            <meta property="og:title" content="Satori Specialty Coffee - Premium Roasts Delivered" />
            <meta property="og:description" content="Experience the rich, complex flavors of our specialty coffee. Satori believes in sustainability, quality, and bringing the best beans to your cup." />
        </Head>

        <Form />
        <Map />
    </main>
  )
}

export default Contact