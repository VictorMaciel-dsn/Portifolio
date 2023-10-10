import Typed from 'react-typed';

function TypingEffect() {
  return (
    <Typed
      strings={['Desenvolvedor web']}
      typeSpeed={100}
      backSpeed={80}
      backDelay={2000}
      loop
      className="typedText"
    />
  );
}

export default TypingEffect;
