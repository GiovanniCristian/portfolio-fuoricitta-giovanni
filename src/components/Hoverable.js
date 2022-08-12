import {useState} from 'react';

const Hoverable = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='text-center mt-5'>
      <div>
        <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            ciao
        </span>

        {isHovering && (
          <div>
           ciao
          </div>
        )}
      </div>
    </div>
  );
};

export default Hoverable;