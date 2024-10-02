export default function headerComponent() {
  return {
    mobileMenuOpen: false,

    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  };
};