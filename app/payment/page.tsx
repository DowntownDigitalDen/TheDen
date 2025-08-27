"use client"

import { useState } from "react"
import { Select, SelectItem } from "@ui/components"

const PaymentPage = () => {
  const [packageType, setPackageType] = useState("")
  const [amount, setAmount] = useState(0)

  const handlePackageChange = (value: string) => {
    setPackageType(value)
    switch (value) {
      case "digital":
        setAmount(500)
        break
      case "creative":
        setAmount(300)
        break
      case "fabrication":
        setAmount(50)
        break
      case "deposit":
        setAmount(100)
        break
      default:
        setAmount(0)
    }
  }

  return (
    <div>
      <h1>Select Your Service Package</h1>
      <Select value={packageType} onChange={handlePackageChange}>
        <SelectItem value="digital">Digital Services Package ($500-$2000)</SelectItem>
        <SelectItem value="creative">Creative & Media Package ($300-$1500)</SelectItem>
        <SelectItem value="fabrication">Digital Fabrication Package ($50-$500+)</SelectItem>
        <SelectItem value="deposit">Project Deposit ($100)</SelectItem>
      </Select>
      <p>Selected Amount: ${amount}</p>
    </div>
  )
}

export default PaymentPage
