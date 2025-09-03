const Button = ({ text, children, className }) => {
    const style = 'flex justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300';
    return (
        <button
            class={`${style} ${className}`}
        >
            {children}
            {text}
        </button>
    )
}

export { Button }