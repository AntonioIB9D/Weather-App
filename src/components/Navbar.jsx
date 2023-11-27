import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from '@nextui-org/react';
import sol from '/sol.png';
import luna from '/luna.png';

export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [ImageShow, setImageShow] = useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  const actualizarImagen = () => {
    setImageShow(!ImageShow);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-blue-950 text-white"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Clima Actual</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            variant="bordered"
            onClick={actualizarImagen}
          >
            <Image
              width={20}
              height={20}
              alt={ImageShow ? 'Sol Imagen' : 'Luna Imagen'}
              src={ImageShow ? sol : luna}
            />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
