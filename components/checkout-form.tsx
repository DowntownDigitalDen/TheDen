"use client"

import type React from "react"
import { useState } from "react"
import { Button, Form, Input, Select } from "antd"
import { useNavigate } from "react-router-dom"

const CheckoutForm: React.FC = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [serviceType, setServiceType] = useState("digital")

  const handleServiceTypeChange = (value: string) => {
    setServiceType(value)
  }

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)
    navigate("/success")
  }

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please input your name!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="serviceType" label="Service Type">
        <Select onChange={handleServiceTypeChange}>
          <Select.Option value="digital">Digital Services Package</Select.Option>
          <Select.Option value="creative">Creative & Media Package</Select.Option>
          <Select.Option value="fabrication">Digital Fabrication Package</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CheckoutForm
