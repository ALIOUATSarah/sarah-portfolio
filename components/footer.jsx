export default function Footer() {
  return (
    <footer className="py-8 bg-beige border-t border-gold/20">
      <div className="container mx-auto px-4 text-center">
        <p className="font-poppins text-sm text-gray-600">
          © {new Date().getFullYear()} Sarah Aliouat | Portfolio created for Mala Yachts Internship Application
        </p>
      </div>
    </footer>
  )
}
