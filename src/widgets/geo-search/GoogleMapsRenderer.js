import React, { render } from 'preact-compat';
import { getContainerNode } from '../../lib/utils.js';
import GoogleMapProvider from '../../components/GeoSearch/GoogleMapsProvider';

const renderer = ({
  hits,
  refine,
  clearRefinementWithMap,
  isRefinedWithMap,
  isRefinePositionChanged,
  enableRefineOnMapMove,
  enableControlRefineWithMap,
  widgetParams,
}) => {
  const { container } = widgetParams;

  const loadingElementStyle = {
    height: '100%',
  };

  const mapElementStyle = {
    height: '350px',
    marginTop: '10px',
    marginBottom: '10px',
  };

  render(
    <GoogleMapProvider
      // GoogleMaps props
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div />}
      mapElement={<div style={mapElementStyle} />}
      // Widget props
      markers={hits}
      refine={refine}
      clearRefinementWithMap={clearRefinementWithMap}
      isRefinedWithMap={isRefinedWithMap}
      isRefinePositionChanged={isRefinePositionChanged}
      enableRefineOnMapMove={enableRefineOnMapMove}
      enableControlRefineWithMap={enableControlRefineWithMap}
    />,
    getContainerNode(container)
  );
};

export default renderer;