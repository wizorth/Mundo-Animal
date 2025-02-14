import { Navbar } from 'flowbite-react';

export default function Header() {
  return (
    <Navbar fluid rounded className='bg-[#4A8578]'>
      <Navbar.Brand>
        <img src="/images/logo_mundoAnimal.png" className="mr-3 h-12 sm:h-16" alt="Logo" />
        <span className="self-center whitespace-nowrap text-5xl font-semibold text-white text-outline drop-shadow-md">Mundo Animal</span>
      </Navbar.Brand>
      <Navbar.Toggle className="text-white" />
      <Navbar.Collapse>
        <Navbar.Link href="#home" active className="text-white drop-shadow-md text-outline">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" active className="text-white drop-shadow-md text-outline">
          About
        </Navbar.Link>
        <Navbar.Link href="#services" active className="text-white drop-shadow-md text-outline">
          Services
        </Navbar.Link>
        <Navbar.Link href="#pricing" active className="text-white drop-shadow-md text-outline">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#contact" active className="text-white drop-shadow-md text-outline">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
