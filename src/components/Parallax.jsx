

const ParallaxBackground = () => {
  return (
    <div className="parallax-background">
      {/* Puedes ajustar la imagen de fondo según tus necesidades */}
      <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url('/parallax.jpg')` }}></div>
    </div>
  );
};

export default ParallaxBackground;
