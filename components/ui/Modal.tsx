'use client'

import React, { useEffect } from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {title && (
                    <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex justify-between items-center">
                        <h2 className="text-2xl font-display">{title}</h2>
                        <button
                            onClick={onClose}
                            className="text-2xl text-secondary hover:text-primary transition-colors"
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                    </div>
                )}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
