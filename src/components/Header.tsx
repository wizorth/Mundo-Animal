import { Navbar } from 'flowbite-react';

export default function Header() {
  return (
    <Navbar fluid rounded className='bg-[#4A8578]'>
      <Navbar.Brand>
        <img src="/images/logo_mundoAnimal.png" className="mr-3 h-12 sm:h-16" alt="Logo" />
        <span className="self-center whitespace-nowrap text-5xl font-semibold text-white text-outline drop-shadow-md">Mundo Animal</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#home" active >
          <div className="text-2xl text-white text-outline drop-shadow-md">Home</div>
        </Navbar.Link>
        <Navbar.Link href="#about" active>
        <div className="text-2xl text-white text-outline drop-shadow-md">About</div>
        </Navbar.Link>  
        <Navbar.Link href="#services" active>
        <div className="text-2xl text-white text-outline drop-shadow-md">Services</div>
        </Navbar.Link>
        <Navbar.Link href="#pricing" active>
        <div className="text-2xl text-white text-outline drop-shadow-md">Pricing</div>
        </Navbar.Link>
        <Navbar.Link href="#contact" active>
        <div className="text-2xl text-white text-outline drop-shadow-md">contact</div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
