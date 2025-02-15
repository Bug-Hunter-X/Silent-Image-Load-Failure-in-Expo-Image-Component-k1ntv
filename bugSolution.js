import React from 'react';
import { Image } from 'expo-image';

const MyImageComponent = ({ source }) => {
  const [error, setError] = React.useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <React.Fragment>
      {!error && (
        <Image source={{ uri: source }} onError={handleError} style={{ width: 200, height: 200 }} />
      )}
      {error && (
        <Image source={require('./placeholder.png')} style={{ width: 200, height: 200 }} />
      )}
    </React.Fragment>
  );
};
export default MyImageComponent;
//bug.js
import React from 'react';
import { Image } from 'expo-image';

const MyImageComponent = ({ source }) => {
  return (
    <Image source={{ uri: source }} style={{ width: 200, height: 200 }} />
  );
};
export default MyImageComponent;