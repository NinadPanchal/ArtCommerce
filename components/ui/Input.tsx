import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm font-medium text-text mb-1">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    )
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
}

export function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm font-medium text-text mb-1">
                    {label}
                </label>
            )}
            <textarea
                className={`w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
                rows={4}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    error?: string
    options: { value: string; label: string }[]
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm font-medium text-text mb-1">
                    {label}
                </label>
            )}
            <select
                className={`w-full px-4 py-2 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
                {...props}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    )
}
