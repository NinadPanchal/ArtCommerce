'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { Input, TextArea, Select } from '@/components/ui/Input'

interface CommissionFormProps {
    isOpen: boolean
    onClose: () => void
    serviceName?: string
}

export default function CommissionForm({ isOpen, onClose, serviceName }: CommissionFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: serviceName || '',
        description: '',
        budget: '',
        timeline: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Commission request submitted:', formData)
        alert('Commission request submitted successfully! We will contact you soon.')
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Request Commission">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />

                <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />

                <Input
                    label="Service Type"
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    placeholder="e.g., Portrait Painting, Custom Sculpture"
                    required
                />

                <TextArea
                    label="Project Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your vision, requirements, size, style, etc."
                    required
                />

                <Select
                    label="Budget Range"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    options={[
                        { value: '', label: 'Select budget range' },
                        { value: '5000-10000', label: '₹5,000 - ₹10,000' },
                        { value: '10000-25000', label: '₹10,000 - ₹25,000' },
                        { value: '25000-50000', label: '₹25,000 - ₹50,000' },
                        { value: '50000+', label: '₹50,000+' },
                    ]}
                    required
                />

                <Select
                    label="Timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    options={[
                        { value: '', label: 'Select timeline' },
                        { value: '1-2-weeks', label: '1-2 weeks' },
                        { value: '2-4-weeks', label: '2-4 weeks' },
                        { value: '1-2-months', label: '1-2 months' },
                        { value: 'flexible', label: 'Flexible' },
                    ]}
                    required
                />

                <div className="mb-6">
                    <label className="block text-sm font-medium text-text mb-2">
                        Reference Images (Optional)
                    </label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="w-full px-4 py-2 border border-border rounded-sm"
                    />
                    <p className="text-xs text-text-muted mt-1">Upload up to 5 reference images</p>
                </div>

                <div className="flex gap-4">
                    <Button type="submit" variant="primary" className="flex-1">
                        Submit Request
                    </Button>
                    <Button type="button" variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
