export const DeepLink = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

export const Directory = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
    </svg>
  );
};

export const PlusCircle = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 8V16" />
      <path d="M8 12H16" />
    </svg>
  );
};

export const Users = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" />
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
    </svg>
  );
};

export const Alert = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M12 8V12" />
      <path d="M12 16H12.01" />
    </svg>
  );
};

// export const Layers = (props) => {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       height={props.height}
//       style={props.style}
//     >
//       <g
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="1"
//       >
//         <path d="m22.917 6.2-10.209-5.278.00000004.00000002c-.444136-.229361-.971863-.229361-1.416-.0000001l-10.209 5.278-.00000007.00000003c-.3021.156451-.420172.528179-.263721.830279.058544.113046.150675.205177.263721.263721l10.209 5.281h.00000001c.444136.229361.971863.229361 1.416.00000005l10.209-5.275.00000002-.00000001c.3021-.156451.420172-.528179.263721-.830279-.058544-.113046-.150675-.205177-.263721-.263721z" />
//         <path d="m5.1 9.375-4.017 2.078-.00000007.00000003c-.3021.156451-.420172.528179-.263721.830279.058544.113046.150675.205177.263721.263721l10.209 5.281h.00000001c.444136.229361.971863.229361 1.416.00000005l10.209-5.281.00000002-.00000001c.3021-.156451.420172-.528179.263721-.830279-.058544-.113046-.150675-.205177-.263721-.263721l-4.017-2.078" />
//         <path d="m5.1 14.625-4.017 2.075-.00000007.00000003c-.3021.156451-.420172.528179-.263721.830279.058544.113046.150675.205177.263721.263721l10.209 5.281h.00000001c.444136.229361.971863.229361 1.416.00000005l10.209-5.275.00000002-.00000001c.3021-.156451.420172-.528179.263721-.830279-.058544-.113046-.150675-.205177-.263721-.263721l-4.017-2.081" />
//       </g>
//     </svg>
//   );
// };

export const Search = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      height={props.height}
      style={props.style}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
};

export const SecurityLock = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
};

export const SettingsDeveloper = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      style={props.style}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18.25 2.251c-1.061 1.061-3.04.96-4.75-.75l-1.5 1.499 8 8 3.5-3.5z" />
        <path d="m11.939 9.94-3.793-3.792.00000007-.00000015c.910118-2.01295.0160937-4.38257-1.99686-5.29269-1.04732-.473526-2.24773-.473639-3.29514-.00031106l2.146 2.145v2h-2l-2.146-2.145.00000008-.00000019c-.910118 2.01295-.0160941 4.38257 1.99686 5.29269 1.04732.473526 2.24773.47364 3.29514.00031136l3.793 3.792" />
        <path d="m12.061 14.062 3.793 3.793.00000008-.00000019c-.910118 2.01295-.0160941 4.38257 1.99686 5.29269 1.04732.473526 2.24773.47364 3.29514.00031136l-2.146-2.148v-2h2l2.146 2.147.00000007-.00000015c.910118-2.01295.0160937-4.38257-1.99686-5.29269-1.04732-.473526-2.24773-.473639-3.29514-.00031106l-3.793-3.793" />
        <path d="m15.439 6.44-14.5 14.5.00000001-.00000001c-.585974.585974-.585974 1.53603.00000001 2.122.585974.585974 1.53603.585974 2.122-.00000001l14.5-14.5" />
      </g>
    </svg>
  );
};

export const Activity = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={props.height}
      style={props.style}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
};

export const ProfileUser = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      style={props.style}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m1.9 17.5h10.12" />
        <path d="m2.51 5.5h18.99" />
        <path d="m12 11.5h-11.49" />
        <path d="m11.378 23.484-.00000038-.00000002c-6.34157-.350952-11.1979-5.77631-10.847-12.1179.350952-6.34157 5.77631-11.1979 12.1179-10.847 4.76348.263618 8.86954 3.44096 10.3201 7.98586" />
        <path d="m11.269.526c-6 6.5-5.891 14.958.109 22.958" />
        <path d="m12.73.526-.00000028-.0000003c2.11586 2.21147 3.56411 4.97556 4.178 7.974" />
        <path d="m23.5 23.5c0-2.76142-2.23858-5-5-5s-5 2.23858-5 5z" />
        <path d="m20.6213 11.8797c1.17157 1.17157 1.17157 3.07107 0 4.24264s-3.07107 1.17157-4.24264 0-1.17157-3.07107 0-4.24264 3.07107-1.17157 4.24264 0" />
      </g>
    </svg>
  );
};

export const Slates = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17.42 17.27-2.787-8.02-3.42 6-2.138-3-2.476 5.048" />
      <path d="m10.7071 8.29289c.390524.390524.390524 1.02369 0 1.41421-.390524.390524-1.02369.390524-1.41421 0-.390524-.390524-.390524-1.02369 0-1.41421.390524-.390524 1.02369-.390524 1.41421 0" />
      <path d="m1.5 6.5h-.00000004c-.552285-.00000002-1-.447715-1-1v-1 .00000015c-.00000008-.552285.447715-1 1-1h2v-2 .00000015c-.00000008-.552285.447715-1 1-1h1-.00000004c.552285-.00000002 1 .447715 1 1v2h13-.00000004c.552285-.00000002 1 .447715 1 1v13h2-.00000004c.552285-.00000002 1 .447715 1 1v1c0 .552285-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1h-1-.00000004c-.552285-.00000002-1-.447715-1-1v-2h-13-.00000004c-.552285-.00000002-1-.447715-1-1v-13z" />
      <path d="m7 17.5c-.27614 0-.5-.22386-.5-.5v-10c0-.27614.22386-.5.5-.5h10c.27614 0 .5.22386.5.5v10c0 .27614-.22386.5-.5.5z" />
    </g>
  </svg>
);

export const Layers = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </g>
  </svg>
);

export const HardDrive = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12H2" />
      <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z" />
      <path d="M6 16H6.01" />
      <path d="M10 16H10.01" />
    </g>
  </svg>
);

export const ExpandBox = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m23.251 7.498v-6.75h-6.75" />
      <path d="m23.25.75-15 15" />
      <path d="m11.251 5.248h-9-.00000007c-.828427.00000004-1.5.671573-1.5 1.5v15-.00000023c-.00000013.828427.671573 1.5 1.5 1.5h15-.00000007c.828427.00000004 1.5-.671573 1.5-1.5v-9" />
    </g>
  </svg>
);

export const ExpandArrow = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <path
      d="m5.5.75 10.72 10.72c.292711.292294.293049.766535.00075431 1.05925-.00025126.00025162-.0005027.00050305-.00075431.00075431l-10.72 10.72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const OldWallet = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m22.5 20.25v1.227l.00000001.00000013c.0413973.931766-.675662 1.7229-1.607 1.773h-8.036-.00000003c-.931338-.0501042-1.6484-.841234-1.607-1.773v-6.2l-.00000001-.00000016c-.0436626-.933293.674031-1.72691 1.607-1.777h8.036-.00000007c.931338.0501042 1.6484.841234 1.607 1.773v.977" />
      <path d="m21.04 13.507-1.282-2.565.00000003.00000007c-.19778-.395089-.678395-.555039-1.07348-.357259-.00017232.00008626-.00034461.00017259-.00051687.00025898l-5.827 2.915" />
      <path d="m22.45 20.25h-.00000003c.441828.00000002.8-.358172.8-.8v-2.4c0-.441828-.358172-.8-.8-.8h-2-.00000009c-1.10457.00000005-2 .895431-2 2 .00000005 1.10457.895431 2 2 2z" />
      <path d="m5.737 21.347-.00000013-.00000008c-5.16103-3.46042-6.53965-10.4495-3.07924-15.6105 3.46042-5.16103 10.4495-6.53965 15.6105-3.07924 2.14401 1.43754 3.7285 3.5686 4.48772 6.03575.0486667.161333.0943333.322333.137.483" />
      <path d="m7.981 19.4-.00000183-.00000581c-1.20611-3.82323-1.51577-7.87283-.904998-11.835l-.00000004.00000035c.268804-2.2946 1.0232-4.50564 2.213-6.486" />
      <path d="m.77 11.25h10.48" />
      <path d="m2.48 6h19.04" />
      <path d="m1.69 16.5h5.55" />
      <path d="m14.711 1.079.00000073.00000119c1.00053 1.62525 1.6795 3.42757 2 5.309.118.58.213333 1.159.286 1.737" />
    </g>
  </svg>
);

export const NavigationArrow = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </g>
  </svg>
);

// export const Home = (props) => (
//   <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
//     <path
//       d="m19.5 8.4v-4.9a.5.5 0 0 0 -.5-.5h-2a.5.5 0 0 0 -.5.5v2.14l-4.162-3.829a.5.5 0 0 0 -.678 0l-11 10.321a.5.5 0 0 0 .34.868h2.5v9.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-9.5h2.5a.5.5 0 0 0 .339-.868z"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

export const Home = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
    </g>
  </svg>
);

// export const Folder = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//     height={props.height}
//     style={props.style}
//   >
//     <path
//       d="m11.236 6h.00000005c-.378666-.0002022-.724736-.214271-.894-.553l-.948-1.894.00000002.00000003c-.169264-.338729-.515334-.552798-.894-.553h-6.5-.00000004c-.552285.00000002-1 .447715-1 1v16 .00000015c.00000008.552285.447715 1 1 1h20-.00000004c.552285.00000002 1-.447715 1-1v-13c0-.552285-.447715-1-1-1z"
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

export const Channels = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16.004" cy="8" r="7.5" />
      <path d="m8.53 8.526a7.5 7.5 0 1 0 6.948 6.948" />
      <path d="m7.504 13.5v-1" />
      <path d="m9 13.5h-2.029a1.342 1.342 0 0 0 -.5 2.587l2.064.826a1.342 1.342 0 0 1 -.5 2.587h-2.035" />
      <path d="m7.504 20.5v-1" />
      <path d="m16.004 5v-1" />
      <path d="m17.5 5h-2.029a1.342 1.342 0 0 0 -.5 2.587l2.064.826a1.342 1.342 0 0 1 -.5 2.587h-2.035" />
      <path d="m16.004 12v-1" />
    </g>
  </svg>
);

export const Peers = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 7.02 3.11-3.09" />
      <path d="m22.9142 1.08579c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m17.96 17.98 2.12 2.13" />
      <path d="m22.9242 20.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m7 7.02-3.11-3.09" />
      <path d="m3.91421 1.08579c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m6.04 17.98-2.12 2.13" />
      <path d="m3.90421 20.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m16.5 11.5h3" />
      <path d="m22.9142 10.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m7.5 11.5h-3" />
      <path d="m3.91421 10.0858c.781049.781049.781049 2.04738 0 2.82843-.781049.781049-2.04738.781049-2.82843 0-.781049-.781049-.781049-2.04738 0-2.82843.781049-.781049 2.04738-.781049 2.82843 0" />
      <path d="m7.51 16.5v-.00000059c.00000038-2.48528 2.01472-4.5 4.5-4.5 2.48528.00000038 4.5 2.01472 4.5 4.5z" />
      <path d="m13.9545 6.30546c1.07394 1.07394 1.07394 2.81515 0 3.88909s-2.81515 1.07394-3.88909 0-1.07394-2.81515 0-3.88909 2.81515-1.07394 3.88909 0" />
    </g>
  </svg>
);

export const Deals = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m23.5 22-1-1.934v-4.566c.042-1.778-2.081-3.363-4-5" />
      <path d="m20.019 17.5-2.551-2.607.00000002.00000002c-.476378-.495833-1.26451-.511603-1.76034-.035225-.495833.476378-.511603 1.26451-.035225 1.76034.00382974.00398614.00768599.00794673.0115685.0118815l2.816 2.87v1.5l-.00000021-.0000012c.153133.894577.493939 1.74659 1 2.5" />
      <path d="m.5 2 1 1.934v4.566c-.042 1.778 2.081 3.363 4 5" />
      <path d="m3.981 6.5 2.551 2.607.00000001.00000001c.476378.495833 1.26451.511603 1.76034.035225.495833-.476378.511603-1.26451.035225-1.76034-.00382974-.00398614-.00768599-.00794673-.0115685-.0118815l-2.816-2.87v-1.5l.00000019.00000112c-.153133-.894577-.493939-1.74659-1-2.5" />
      <path d="m5.5 8.052v11.448.00000015c.00000008.552285.447715 1 1 1h9.5" />
      <path d="m18.5 15.948v-11.448c0-.552285-.447715-1-1-1h-10" />
    </g>
  </svg>
);

export const DataTransfer = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m20.5 14.406a4.311 4.311 0 0 0 2.5-4.049 4.711 4.711 0 0 0 -4.954-4.635 6.706 6.706 0 0 0 -6.046-3.722 6.605 6.605 0 0 0 -6.675 6.109 3.561 3.561 0 0 0 -4.325 3.409 3.186 3.186 0 0 0 2.5 3.282" />
      <path d="m6 19 3 3 3-3" />
      <path d="m9 22v-9" />
      <path d="m12 16 3-3 3 3" />
      <path d="m15 13v9" />
    </g>
  </svg>
);

export const Stats = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <path
      d="m.5 12.001h6l3-10 3 19 3-14 2 5h6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logs = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8.5 20.5h-7a1 1 0 0 1 -1-1v-16a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5" />
      <path d="m4.5 4.5v-4" />
      <path d="m8.5 4.5v-4" />
      <path d="m12.5 4.5v-4" />
      <path d="m17.5 20.5a.25.25 0 1 1 -.25.25.25.25 0 0 1 .25-.25" />
      <path d="m17.5 18.5v-3" />
      <path d="m18.338 12.5a.95.95 0 0 0 -1.676 0l-5.056 9.635a.923.923 0 0 0 .031.914.948.948 0 0 0 .807.448h10.112a.948.948 0 0 0 .807-.448.923.923 0 0 0 .031-.914z" />
    </g>
  </svg>
);

export const Status = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m14.061 5.243a1.5 1.5 0 0 1 0 2.121" />
      <path d="m16.182 3.121a4.5 4.5 0 0 1 0 6.364" />
      <path d="m16.182 3.121a4.5 4.5 0 0 1 0 6.364" />
      <path d="m18.3 1a7.5 7.5 0 0 1 0 10.607" />
      <path d="m18.3 1a7.5 7.5 0 0 1 0 10.607" />
      <path d="m9.939 5.243a1.5 1.5 0 0 0 0 2.121" />
      <path d="m7.818 3.121a4.5 4.5 0 0 0 0 6.364" />
      <path d="m7.818 3.121a4.5 4.5 0 0 0 0 6.364" />
      <path d="m5.7 1a7.5 7.5 0 0 0 0 10.607" />
      <path d="m5.7 1a7.5 7.5 0 0 0 0 10.607" />
      <path d="m23.5 19a2 2 0 0 1 -2 2h-19a2 2 0 0 1 -2-2v-2a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2z" />
      <path d="m4.75 17.75a.25.25 0 1 0 .25.25.25.25 0 0 0 -.25-.25z" />
      <path d="m8.25 17.75a.25.25 0 1 0 .25.25.25.25 0 0 0 -.25-.25z" />
      <path d="m12 15v-5" />
      <path d="m4 21-1.5 2" />
      <path d="m20 21 1.5 2" />
    </g>
  </svg>
);

export const Miners = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m2.561 23.207a1 1 0 0 1 -1.415 0l-.353-.353a1 1 0 0 1 0-1.414l13.016-13.018 1.768 1.768z" />
      <path d="m23.5 16.879a17 17 0 0 0 -16.379-16.379.5.5 0 0 0 -.24.948 33.1 33.1 0 0 1 7.526 4.963l-.951.951a.5.5 0 0 0 0 .707l2.474 2.475a.5.5 0 0 0 .707 0l.952-.951a33.076 33.076 0 0 1 4.962 7.526.5.5 0 0 0 .949-.24z" />
      <path d="m19.383 6.384.79-.79a1 1 0 0 0 0-1.415l-.353-.353a1 1 0 0 0 -1.414 0l-.791.791" />
    </g>
  </svg>
);

export const StorageMarket = (props) => (
  <svg viewBox="0 0 24 24" height={props.height} style={props.style}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m23.5 22h-22.5a.5.5 0 0 1 -.5-.5v-19.5" />
      <path d="m12.872 15.523c.182 1 .458 3.477 3.128 3.477" />
      <path d="m3 19a3 3 0 0 0 2.947-2.46l1.2-6.571a2.4 2.4 0 0 1 3.8-1.487" />
      <path d="m8 19a3 3 0 0 0 2.947-2.46l1.2-6.571a2.4 2.4 0 0 1 4.714 0l1.2 6.571a3 3 0 0 0 2.939 2.46" />
    </g>
  </svg>
);

export const PowerButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
    <line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);

export const Bell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const Slate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" />
    <path d="M3.27002 6.95996L12 12.01L20.73 6.95996" />
    <path d="M12 22.08V12" />
  </svg>
);

export const Trash = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6H5H21" />
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" />
    <path d="M10 11V17" />
    <path d="M14 11V17" />
  </svg>
);

export const Download = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M8 12L12 16L16 12" />
    <path d="M12 8V16" />
  </svg>
);

export const Folder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" />
  </svg>
);

export const Tool = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.6999 6.30001C14.5166 6.48694 14.414 6.73826 14.414 7.00001C14.414 7.26176 14.5166 7.51308 14.6999 7.70001L16.2999 9.30001C16.4868 9.48324 16.7381 9.58587 16.9999 9.58587C17.2616 9.58587 17.5129 9.48324 17.6999 9.30001L21.4699 5.53001C21.9727 6.6412 22.1249 7.87924 21.9063 9.07916C21.6877 10.2791 21.1086 11.3839 20.2461 12.2463C19.3837 13.1087 18.2789 13.6878 17.079 13.9065C15.8791 14.1251 14.641 13.9728 13.5299 13.47L6.61986 20.38C6.22203 20.7778 5.68246 21.0013 5.11986 21.0013C4.55725 21.0013 4.01768 20.7778 3.61986 20.38C3.22203 19.9822 2.99854 19.4426 2.99854 18.88C2.99854 18.3174 3.22203 17.7778 3.61986 17.38L10.5299 10.47C10.027 9.35882 9.87477 8.12078 10.0934 6.92087C10.312 5.72095 10.8911 4.61617 11.7536 3.75373C12.616 2.8913 13.7208 2.31218 14.9207 2.09355C16.1206 1.87493 17.3587 2.02718 18.4699 2.53001L14.7099 6.29001L14.6999 6.30001Z" />
  </svg>
);

export const Wallet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5713 11.5206C13.1232 11.5989 13.6627 11.6753 14.2188 11.7542C14.2656 11.5862 14.3053 11.4429 14.3509 11.2791C13.779 11.1941 13.2331 11.113 12.647 11.026C12.8441 10.3257 13.0144 9.65605 13.2273 9.00017C13.2975 8.78429 13.4542 8.58165 13.6139 8.41397C13.8235 8.19421 14.1134 8.2429 14.291 8.48439C14.3653 8.58553 14.4353 8.6925 14.5244 8.77907C14.6382 8.88944 14.8059 8.9431 14.9202 8.83565C14.9953 8.76511 14.9929 8.59913 14.9999 8.47432C15.0027 8.42417 14.9438 8.36516 14.903 8.31891C14.7046 8.09332 14.4365 8.01342 14.1535 8.00153C13.5219 7.97494 13.0687 8.29826 12.7128 8.78696C12.3602 9.27129 12.2056 9.84072 12.0372 10.4035C11.9882 10.5678 11.9461 10.7342 11.8967 10.9145C11.2819 10.8252 10.692 10.7394 10.085 10.6514C10.0635 10.8159 10.0434 10.9703 10.022 11.1342C10.623 11.227 11.1979 11.3158 11.7921 11.4076C11.7126 11.7442 11.6384 12.0583 11.5623 12.3805C10.9794 12.2987 10.4268 12.2213 9.87048 12.1431C9.8469 12.3235 9.82912 12.4599 9.80808 12.6204C10.3669 12.7061 10.9056 12.7887 11.4479 12.8719C11.4479 12.9333 11.4545 12.969 11.4468 13.0014C11.2738 13.7419 11.1128 14.4857 10.9187 15.2205C10.826 15.5709 10.6768 15.9092 10.3867 16.1554C10.1479 16.3581 9.88547 16.3242 9.70591 16.0727C9.62477 15.9594 9.55705 15.8249 9.44992 15.7455C9.37168 15.6874 9.19756 15.6524 9.14012 15.699C9.05499 15.7682 8.99332 15.9213 9.00058 16.0338C9.00675 16.1334 9.10227 16.25 9.18994 16.318C9.48535 16.5464 9.83299 16.5795 10.1852 16.5099C10.7752 16.3933 11.1913 16.0237 11.4492 15.501C11.6519 15.0901 11.8036 14.6513 11.947 14.2146C12.0769 13.8191 12.1651 13.4098 12.2751 12.9927C12.8545 13.077 13.4225 13.1597 14.0022 13.2441C14.0501 13.078 14.0932 12.9277 14.1398 12.7659C13.5333 12.6764 12.9545 12.5908 12.3709 12.5046C12.441 12.1606 12.5034 11.8543 12.5713 11.5206Z"
      fill="currentColor"
    />
    <path
      d="M12.5713 11.5206C13.1232 11.5989 13.6627 11.6753 14.2188 11.7542C14.2656 11.5862 14.3053 11.4429 14.3509 11.2791C13.779 11.1941 13.2331 11.113 12.647 11.026C12.8441 10.3257 13.0144 9.65605 13.2273 9.00017C13.2975 8.78429 13.4542 8.58165 13.6139 8.41397C13.8235 8.19421 14.1134 8.2429 14.291 8.48439C14.3653 8.58553 14.4353 8.6925 14.5244 8.77907C14.6382 8.88944 14.8059 8.9431 14.9202 8.83565C14.9953 8.76511 14.9929 8.59913 14.9999 8.47432C15.0027 8.42417 14.9438 8.36516 14.903 8.31891C14.7046 8.09332 14.4365 8.01342 14.1535 8.00153C13.5219 7.97494 13.0687 8.29826 12.7128 8.78696C12.3602 9.27129 12.2056 9.84072 12.0372 10.4035C11.9882 10.5678 11.9461 10.7342 11.8967 10.9145C11.2819 10.8252 10.692 10.7394 10.085 10.6514C10.0635 10.8159 10.0434 10.9703 10.022 11.1342C10.623 11.227 11.1979 11.3158 11.7921 11.4076C11.7126 11.7442 11.6384 12.0583 11.5623 12.3805C10.9794 12.2987 10.4268 12.2213 9.87048 12.1431C9.8469 12.3235 9.82912 12.4599 9.80808 12.6204C10.3669 12.7061 10.9056 12.7887 11.4479 12.8719C11.4479 12.9333 11.4545 12.969 11.4468 13.0014C11.2738 13.7419 11.1128 14.4857 10.9187 15.2205C10.826 15.5709 10.6768 15.9092 10.3867 16.1554C10.1479 16.3581 9.88547 16.3242 9.70591 16.0727C9.62477 15.9594 9.55705 15.8249 9.44992 15.7455C9.37168 15.6874 9.19756 15.6524 9.14012 15.699C9.05499 15.7682 8.99332 15.9213 9.00058 16.0338C9.00675 16.1334 9.10227 16.25 9.18994 16.318C9.48535 16.5464 9.83299 16.5795 10.1852 16.5099C10.7752 16.3933 11.1913 16.0237 11.4492 15.501C11.6519 15.0901 11.8036 14.6513 11.947 14.2146C12.0769 13.8191 12.1651 13.4098 12.2751 12.9927C12.8545 13.077 13.4225 13.1597 14.0022 13.2441C14.0501 13.078 14.0932 12.9277 14.1398 12.7659C13.5333 12.6764 12.9545 12.5908 12.3709 12.5046C12.441 12.1606 12.5034 11.8543 12.5713 11.5206"
      stroke="currentColor"
      strokeWidth="0.3"
    />
    <path d="M9 1V4" stroke="currentColor" strokeWidth="2" />
    <path d="M15 1V4" stroke="currentColor" strokeWidth="2" />
    <path d="M9 20V23" stroke="currentColor" strokeWidth="2" />
    <path d="M15 20V23" stroke="currentColor" strokeWidth="2" />
    <path d="M20 9H23" stroke="currentColor" strokeWidth="2" />
    <path d="M20 14H23" stroke="currentColor" strokeWidth="2" />
    <path d="M1 9H4" stroke="currentColor" strokeWidth="2" />
    <path d="M1 14H4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Refresh = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

export const Document = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" />
    <path d="M13 2V9H20" />
  </svg>
);

export const Book = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" />
    <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" />
  </svg>
);

export const Sound = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
    <path d="M16.24 7.75999C16.7979 8.31723 17.2404 8.97896 17.5424 9.70735C17.8443 10.4357 17.9997 11.2165 17.9997 12.005C17.9997 12.7935 17.8443 13.5742 17.5424 14.3026C17.2404 15.031 16.7979 15.6928 16.24 16.25M7.76 16.24C7.20214 15.6828 6.75959 15.021 6.45764 14.2926C6.1557 13.5642 6.00028 12.7835 6.00028 11.995C6.00028 11.2065 6.1557 10.4257 6.45764 9.69735C6.75959 8.96896 7.20214 8.30723 7.76 7.74999M19.07 4.92999C20.9447 6.80527 21.9979 9.34835 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M4.93 19.07C3.05529 17.1947 2.00214 14.6516 2.00214 12C2.00214 9.34835 3.05529 6.80527 4.93 4.92999" />
  </svg>
);

export const Video = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" />
    <path d="M7 2V22" />
    <path d="M17 2V22" />
    <path d="M2 12H22" />
    <path d="M2 7H7" />
    <path d="M2 17H7" />
    <path d="M17 17H22" />
    <path d="M17 7H22" />
  </svg>
);

export const Image = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" />
    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" />
    <path d="M21 15L16 10L5 21" />
  </svg>
);

export const Eye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={props.height}
    style={props.style}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Dismiss = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    tabIndex="0"
    height={props.height}
    style={props.style}
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Settings = (props) => (
  <svg
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const Privacy = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m22.823 8.611c.570278-.632425.570278-1.59357 0-2.226-2.623-2.885-6.792-5.701-10.823-5.634-4.031-.067-8.2 2.749-10.821 5.634l-.00000003.00000004c-.569817.632603-.569817 1.5934.00000007 2.226 2.563 2.824 6.721 5.706 10.821 5.638" />
      <path d="m15.75 7.5c0 2.07107-1.67893 3.75-3.75 3.75s-3.75-1.67893-3.75-3.75 1.67893-3.75 3.75-3.75h-.00000016c2.07107-.00000009 3.75 1.67893 3.75 3.75z" />
      <path d="m15.75 23.25c-.82842 0-1.5-.67158-1.5-1.5v-4.5c0-.82842.67158-1.5 1.5-1.5h6c.82842 0 1.5.67158 1.5 1.5v4.5c0 .82842-.67158 1.5-1.5 1.5z" />
      <path d="m18.75 11.25h-.00000013c-1.65685.00000007-3 1.34315-3 3v1.5h6v-1.5-.00000013c0-1.65685-1.34315-3-3-3-.00000004 0-.00000009 0-.00000013 0z" />
      <path d="m18.75 19.154h-.00000002c.207107-.00000001.375.167893.375.375.00000001.207107-.167893.375-.375.375-.207107.00000001-.375-.167893-.375-.375v.00000006c-.00000003-.207107.167893-.375.375-.375" />
    </g>
  </svg>
);

export const FileImage = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height={props.height}
    style={props.style}
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.207 4.5-.00000002-.00000002c.187549.187493.292943.441805.293.707v17.293c0 .552285-.447715 1-1 1h-17-.00000004c-.552285-.00000002-1-.447715-1-1v-21 .00000015c-.00000008-.552285.447715-1 1-1h13.293.00000001c.265195.00005664.519507.105451.707.293z" />
      <path d="m12.826 12.366-2.8-3.74.00000001.00000002c-.165798-.22083-.479221-.265442-.700051-.0996437-.0578698.0434484-.105619.0989405-.139949.162644l-3.276 6.074.00000001-.00000002c-.130892.24315-.0398879.546371.203262.677262.0727636.0391698.154101.0596942.236738.0597376h4.181" />
      <path d="m17.3284 13.1716c1.5621 1.5621 1.5621 4.09476 0 5.65685-1.5621 1.5621-4.09476 1.5621-5.65685 0-1.5621-1.5621-1.5621-4.09476 0-5.65685 1.5621-1.5621 4.09476-1.5621 5.65685 0" />
    </g>
  </svg>
);

export const Information = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="m12 0h-.00000052c-6.62742.00000029-12 5.37258-12 12 .00000029 6.62742 5.37258 12 12 12 6.62742-.00000029 12-5.37258 12-12l-.00000013-.00012266c-.00723277-6.62445-5.37568-11.9928-12.0001-11.9999zm0 19h-.00000007c-.828427-.00000004-1.5-.671573-1.5-1.5.00000004-.828427.671573-1.5 1.5-1.5.828427.00000004 1.5.671573 1.5 1.5v-.00000007c0 .828427-.671573 1.5-1.5 1.5zm1.6-6.08h.00000001c-.364588.159119-.600193.519202-.6.917 0 .552285-.447715 1-1 1s-1-.447715-1-1l-.00000003-.00045412c-.00000018-1.19303.706913-2.27268 1.80042-2.74973l.00000001-.00000001c1.01225-.442058 1.47449-1.62101 1.03243-2.63326-.442058-1.01225-1.62101-1.47449-2.63326-1.03243-.728973.318347-1.19999 1.03843-1.19958 1.83388 0 .552285-.447715 1-1 1s-1-.447715-1-1v-.00005995c-.00000033-2.20914 1.79086-4 4-4 2.20914-.00000033 4 1.79086 4 4 .00000024 1.59051-.942318 3.0299-2.40005 3.66609z"
    />
  </svg>
);

export const InfoCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 16V12" />
    <path d="M12 8H12.01" />
  </svg>
);

export const Minimize = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14H10V20" />
    <path d="M20 10H14V4" />
    <path d="M14 10L21 3" />
    <path d="M3 21L10 14" />
  </svg>
);

export const Maximize = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 3H21V9" />
    <path d="M9 21H3V15" />
    <path d="M21 3L14 10" />
    <path d="M3 21L10 14" />
  </svg>
);

export const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const Minus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12H19" />
  </svg>
);

export const FilecoinLogo = (props) => (
  <svg
    viewBox="0 0 127 127"
    height={props.height}
    style={props.style}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m71.4 57.6c-.7 3.3-1.3 6.4-2 9.8 5.9.9 11.7 1.7 17.7 2.6-.5 1.6-.9 3.1-1.4 4.8-5.8-.8-11.5-1.7-17.3-2.5-1.1 4.2-2 8.3-3.3 12.2-1.4 4.4-3 8.7-5 12.9-2.6 5.2-6.8 8.9-12.7 10.1-3.5.7-7 .4-10-1.9-.9-.7-1.8-1.8-1.9-2.8-.1-1.1.5-2.7 1.4-3.3.6-.5 2.3-.1 3.1.5 1.1.8 1.8 2.1 2.6 3.3 1.8 2.5 4.4 2.9 6.8.8 2.9-2.5 4.4-5.8 5.3-9.3 1.9-7.3 3.6-14.8 5.3-22.2.1-.3 0-.7 0-1.3-5.4-.8-10.8-1.7-16.5-2.5.2-1.6.4-3 .6-4.8 5.6.8 11.1 1.6 17 2.4.8-3.2 1.5-6.4 2.3-9.7-6-.9-11.7-1.8-17.8-2.7.2-1.6.4-3.2.6-4.8 6.1.9 12 1.7 18.2 2.6.5-1.8.9-3.5 1.4-5.1 1.7-5.6 3.2-11.3 6.8-16.2s8.1-8.1 14.5-7.8c2.8.1 5.5.9 7.5 3.2.4.5 1 1.1 1 1.6-.1 1.2 0 2.9-.8 3.6-1.1 1.1-2.8.5-4-.6-.9-.9-1.6-1.9-2.3-2.9-1.8-2.4-4.7-2.9-6.8-.7-1.6 1.7-3.2 3.7-3.9 5.9-2.1 6.6-3.8 13.2-5.8 20.2 5.9.9 11.4 1.7 17.1 2.5-.5 1.6-.9 3.1-1.3 4.7-5.5-1.1-10.9-1.9-16.4-2.6z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDown = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export const CheckBox = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export const Help = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M9.08997 8.99996C9.32507 8.33163 9.78912 7.76807 10.3999 7.40909C11.0107 7.05012 11.7289 6.9189 12.4271 7.03867C13.1254 7.15844 13.7588 7.52148 14.215 8.06349C14.6713 8.60549 14.921 9.29148 14.92 9.99996C14.92 12 11.92 13 11.92 13" />
      <path d="M12 17H12.01" />
    </svg>
  );
};

export const CopyAndPaste = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" />
      <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" />
    </svg>
  );
};

export const BandwidthDown = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <path d="m20.25 17.25h-.00000013c1.65685-.00000007 3 1.34315 3 3 .00000007 1.65685-1.34315 3-3 3h-16.5-.00000013c-1.65685-.00000007-3-1.34315-3-3 .00000007-1.65685 1.34315-3 3-3z" />
      <path d="m7.5 6.751h-1.356-.00000002c-1.39991-.00004099-2.61375.968129-2.925 2.333l-2.394 10.499" />
      <path d="m23.175 19.583-2.394-10.5.00000014.0000006c-.311246-1.36487-1.52509-2.33304-2.925-2.333h-1.356" />
      <path d="m19.125 19.875h-.00000002c-.207107.00000001-.375.167893-.375.375.00000001.207107.167893.375.375.375.207107-.00000001.375-.167893.375-.375 0-.207107-.167893-.375-.375-.375" />
      <path d="m9.75 20.25h-5.25" />
      <path d="m9 9.75 3 3 3-3" />
      <path d="m12 12.75v-12" />
    </svg>
  );
};

export const BandwidthUp = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <path d="m20.25 17.25h-.00000013c1.65685-.00000007 3 1.34315 3 3 .00000007 1.65685-1.34315 3-3 3h-16.5-.00000013c-1.65685-.00000007-3-1.34315-3-3 .00000007-1.65685 1.34315-3 3-3z" />
      <path d="m7.5 6.751h-1.356-.00000002c-1.39991-.00004099-2.61375.968129-2.925 2.333l-2.394 10.499" />
      <path d="m23.175 19.583-2.394-10.5.00000014.0000006c-.311246-1.36487-1.52509-2.33304-2.925-2.333h-1.356" />
      <path d="m19.125 19.875h-.00000002c-.207107.00000001-.375.167893-.375.375.00000001.207107.167893.375.375.375.207107-.00000001.375-.167893.375-.375 0-.207107-.167893-.375-.375-.375" />
      <path d="m9.75 20.25h-5.25" />
      <path d="m15 3.75-3-3-3 3" />
      <path d="m12 .75v12" />
    </svg>
  );
};

export const Reorder = (props) => {
  return (
    <svg
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z" />
      <path d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z" />
      <path d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z" />
      <path d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z" />
    </svg>
  );
};

export const Calendar = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
};

export const ChevronRight = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export const ChevronLeft = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
};

export const LocationPin = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

export const MoreHorizontal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" />
    <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" />
    <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" />
  </svg>
);

export const GridView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 3H3V10H10V3Z" />
    <path d="M21 3H14V10H21V3Z" />
    <path d="M21 14H14V21H21V14Z" />
    <path d="M10 14H3V21H10V14Z" />
  </svg>
);

export const ListView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 3H3V10H21V3Z" />
    <path d="M21 14H3V21H21V14Z" />
  </svg>
);
