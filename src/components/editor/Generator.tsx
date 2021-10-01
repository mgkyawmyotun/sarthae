import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import type { FC } from 'react';
import React from 'react';

interface GeneratorProp {
  ref_element: React.RefObject<HTMLDivElement>;
}
export const Generator: FC<GeneratorProp> = ({ ref_element }) => {
  return (
    <div>
      <button
        onClick={() => {
          if (ref_element && ref_element.current) {
            domtoimage.toBlob(ref_element.current).then((value) => {
              saveAs(value);
            });
          }
        }}
      >
        Generate
      </button>
    </div>
  );
};
