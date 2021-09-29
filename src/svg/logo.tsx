import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0h128v128H0z" />
      <path
        d="M35.516 60.508h-.26c-.93 0-1.395.499-1.395 1.496v2.992c0 .997.465 1.496 1.395 1.496h.26c.385-.752.577-1.75.577-2.992 0-1.243-.192-2.24-.577-2.992zm1.098 5.984h3.665c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-3.665c.273.828.41 1.826.41 2.992s-.137 2.163-.41 2.992zm4.595-8.976c1.55 0 2.326.997 2.326 2.992v5.984c0 1.995-.775 2.992-2.326 2.992h-6.883c-1.55 0-2.326-.997-2.326-2.992v-5.984c0-1.995.775-2.992 2.326-2.992h6.883z"
        fill="#030303"
      />
      <path
        d="M43.902 60.508c-.93 0-1.395.499-1.395 1.496l-1.861-1.496c0-1.995.775-2.992 2.326-2.992h6.883c1.55 0 2.326.997 2.326 2.992v5.984c0 1.995-.775 2.992-2.326 2.992h-4.372v-2.992h3.442c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-5.023zM63.6 65.456v-2.992c0-.997-.465-1.496-1.395-1.496h-5.023c-.93 0-1.395.499-1.395 1.496v2.992c0 .998.465 1.496 1.395 1.496h5.023c.93 0 1.396-.498 1.396-1.496zm1.861 0c0 .998.465 1.496 1.395 1.496h5.024c.93 0 1.395-.498 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-5.024c-.93 0-1.395.499-1.395 1.496v2.992zm-.93-7.066c.36-.276.825-.414 1.395-.414h6.884c1.55 0 2.325.998 2.325 2.992v5.984c0 1.995-.775 2.992-2.325 2.992h-6.884c-.57 0-1.035-.138-1.395-.414-.36.276-.825.414-1.396.414h-6.883c-1.55 0-2.326-.997-2.326-2.992v-5.984c0-1.995.775-2.992 2.326-2.992h6.883c.571 0 1.036.138 1.396.415zM87.326 64.996c0 .997.465 1.496 1.395 1.496h5.023c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-3.442v-2.992h4.372c1.55 0 2.326.997 2.326 2.992v5.984c0 1.995-.775 2.992-2.326 2.992h-6.883c-.57 0-1.036-.138-1.396-.414-.36.276-.824.414-1.395.414h-6.884c-.16 0-.316-.008-.465-.023v4.05c0 .998.465 1.497 1.396 1.497h14.697c.93 0 1.395-.499 1.395-1.496v-3.568H97v5.064C97 77.003 96.225 78 94.674 78H78.116c-1.55 0-2.325-.997-2.325-2.992V64.996h1.86c0 .997.465 1.496 1.396 1.496h5.023c.93 0 1.395-.499 1.395-1.496v-2.992c0-.997-.465-1.496-1.395-1.496h-5.023c-.93 0-1.396.499-1.396 1.496h-1.86v-1.496c0-1.995.775-2.992 2.325-2.992H85c1.55 0 2.326.997 2.326 2.992v4.488z"
        fill="#030303"
      />
      <path
        d="M92.412 70.578c1.24 0 1.332.767 1.332 2.301 0 1.534-.194 1.4-1.434 1.4s-1.55-.383-1.55-1.918c0-1.534.412-1.783 1.652-1.783zM90.581 50.762c-.93 0-1.395.422-1.395 1.266 0 .844.465 1.266 1.395 1.266h2.14v2.762h-3.07c-1.55 0-2.325-.998-2.325-2.992v-2.072c0-1.995.775-2.992 2.325-2.992h6.14c1.55 0 2.325.997 2.325 2.992l-1.86 1.036c0-.844-.465-1.266-1.395-1.266h-4.28z"
        fill="#030303"
      />
      <path d="M31 82h68M31 45h68" stroke="#000" strokeWidth={4} />
    </svg>
  );
}

export default Logo;
