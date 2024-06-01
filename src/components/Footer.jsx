export default function Footer() {
    const today = new Date()
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

    return (
        <footer className="footer bg-gray-200 py-4 text-center text-black">
            <div className="container mx-auto">
                <p className="text-sm">Designed by Nithin | {formattedDate}</p>
            </div>
        </footer>
    )
}
