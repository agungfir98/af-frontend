export default function Skill() {
  return (
    <div
      className="relative my-20 sm:pt-20 pt-16 container lg:px-32 md:px-16 px-4 mx-auto md:text-left"
      id="skills"
    >
      <div className="text-gray-800 dark:text-white-wdew text-2xl sm:text-4xl font-bold">
        Skills
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="1 col-span-5">
          <p className="mt-20 mb-5 text-gray-500 dark:text-gray-200 px-4 tracking-wider text-center">
            MarkUp & Scripting languages:
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-y-20">
            {/* html */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>HTML5</title>
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fillRule="nonzero"
                  d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z"
                ></path>
              </g>
            </svg>
            {/* tailwind */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
            {/* JS */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>JavaScript</title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
            </svg>
            {/* TS */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 50 50"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>TypeScript</title>
              <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z" />
            </svg>
            {/* python */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Python</title>
              <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
            </svg>
          </div>
        </div>
        {/* DB */}
        <div className="2 col-span-5 md:col-span-5 lg:col-span-2">
          <p className="mt-16 mb-5 text-center text-gray-500 dark:text-gray-200 px-4 tracking-wider">
            Databases:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 place-items-center">
            {/* mysql */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>MySQL</title>
              <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
            </svg>
            {/* Mongo DB */}
            <svg
              fill="currentColor"
              strokeWidth="0"
              role="img"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1112.61 300"
            >
              <title>Mongo DB</title>
              <path d="M134.44,120.34C119.13,52.8,87.22,34.82,79.08,22.11a144.57,144.57,0,0,1-8.9-17.42c-.43,6-1.22,9.78-6.32,14.33C53.62,28.15,10.13,63.59,6.47,140.33c-3.41,71.55,52.6,115.67,60,120.23,5.69,2.8,12.62.06,16-2.51,27-18.53,63.89-67.93,52-137.71" />
              <path d="M72.5,222.46c-1.41,17.71-2.42,28-6,38.12,0,0,2.35,16.86,4,34.72h5.84a324.73,324.73,0,0,1,6.37-37.39C75.15,254.19,72.79,238,72.5,222.46Z" />
              <path d="M82.7,257.92h0c-7.64-3.53-9.85-20.06-10.19-35.46a725.83,725.83,0,0,0,1.65-76.35c-.4-13.36.19-123.74-3.29-139.9A134.29,134.29,0,0,0,79.08,22.1c8.14,12.72,40.06,30.7,55.36,98.24C146.36,190,109.67,239.27,82.7,257.92Z" />
              <path d="M1089.7,233.5a16.59,16.59,0,1,1,16.59-16.82,16.38,16.38,0,0,1-16.59,16.82m0-31.68a15.1,15.1,0,1,0,15,15.14,14.85,14.85,0,0,0-15-15.14m4,25.58-4.28-9.23h-3.45v9.23h-2.51v-21h6.19c4.61,0,6.53,2,6.53,5.87,0,3.08-1.45,5-4.15,5.59l4.42,9.51ZM1086.07,216h3.63c2.94,0,4.06-1,4.06-3.68s-1.07-3.59-4.38-3.59h-3.31Z" />
              <path d="M842.79,218.38c4.49,3.59,13.46,5.07,21.37,5.07,10.25,0,20.3-1.9,30.12-10.77,10-9.09,16.88-23,16.88-45.21,0-21.34-8.12-38.66-24.78-48.8-9.4-5.91-21.58-8.24-35.47-8.24-4,0-8.12.21-10.46,1.27a5.49,5.49,0,0,0-1.93,3c-.42,3.8-.42,32.74-.42,49.85,0,17.54,0,42,.42,45,.22,2.54,1.5,7,4.27,8.87M800.15,100.93c3.63,0,17.43.63,23.85.63,12,0,20.29-.63,42.72-.63,18.8,0,34.62,5.07,45.93,14.78,13.68,11.84,21,28.31,21,48.38,0,28.52-13,45-26.07,54.29-13,9.72-29.91,15.21-54,15.21-12.82,0-34.83-.42-53.2-.63H800c-.86-1.69,1.57-8.28,3.07-8.45,5-.56,6.32-.76,8.62-1.71,3.88-1.59,4.79-3.57,5.22-10.54.64-13.1.43-28.73.43-46.48,0-12.67.21-37.39-.21-45.21-.65-6.54-3.41-8.23-9-9.5a116.24,116.24,0,0,0-12-1.9c-.42-1.27,2.86-7,3.93-8.24" />
              <path d="M986.6,111.65c-.85.21-1.92,2.33-1.92,3.38-.22,7.61-.43,27.46-.43,41.19a1.36,1.36,0,0,0,1.07,1.06c2.77.21,9.61.43,15.38.43,8.12,0,12.82-1.06,15.38-2.33,6.84-3.38,10-10.78,10-18.8,0-18.38-12.82-25.35-31.83-25.35a57.35,57.35,0,0,0-7.69.42m48.5,84.5c0-18.59-13.68-29.15-38.68-29.15-1.06,0-9-.21-10.89.21-.64.21-1.28.63-1.28,1.06,0,13.31-.22,34.64.43,43.09.43,3.59,3,8.66,6.19,10.14,3.42,1.9,11.11,2.32,16.45,2.32,14.74,0,27.78-8.23,27.78-27.67M948,101.3c1.93,0,7.61.63,22.14.63,13.67,0,24.78-.42,38-.42,16.45,0,39.09,5.92,39.09,30.42,0,12-8.54,21.76-19.65,26.41-.64.21-.64.63,0,.84,15.81,4,29.69,13.73,29.69,32.32,0,18.17-11.32,29.58-27.77,36.76-10,4.44-22.43,5.91-35,5.91-9.61,0-35.37-1-49.69-.84-1.5-.63,1.37-7.4,2.65-8.45a39.38,39.38,0,0,0,9.69-1.52c5.12-1.26,5.73-2.91,6.37-10.52.43-6.55.43-30,.43-46.69,0-22.82.22-38.23,0-45.84-.21-5.91-2.35-7.82-6.41-8.87-3.2-.64-8.54-1.27-12.81-1.9-1.07-1.06,2.22-7.4,3.28-8.24" />
              <path d="M181.75,233.5a9.26,9.26,0,0,1-.65-4.27,5.43,5.43,0,0,1,.65-2.85,72.58,72.58,0,0,0,8.2-1.67c3.78-.94,5.2-3,5.42-7.82.62-11.39.66-32.76.44-47.78v-.44c0-1.62,0-3.82-2-5.37a42.94,42.94,0,0,0-11.33-5c-1.79-.53-2.78-1.47-2.73-2.57s1.18-2.4,3.51-2.86c6.19-.63,22.41-4.5,28.78-7.44a4.22,4.22,0,0,1,.85,3c0,.66-.1,1.36-.17,2.08-.18,2.12-.38,4.53-.38,6.93a1.58,1.58,0,0,0,2.68.91c12.13-9.51,23-12.9,28.57-12.9,9.17,0,16.31,4.38,21.84,13.4a1.47,1.47,0,0,0,1.24.73,1.42,1.42,0,0,0,1.16-.62c11.15-8.46,22.2-13.51,29.6-13.51,17.48,0,27.93,13.09,27.93,35,0,6.3-.06,14.29-.12,21.74-.05,6.54-.1,12.67-.1,16.91,0,1,1.38,3.88,3.45,4.45,2.56,1.25,6.25,1.89,10.92,2.69l.18,0c.35,1.26-.39,6.15-1.1,7.15-1.16,0-2.76-.1-4.76-.2-3.63-.18-8.61-.43-14.4-.43-11.62,0-17.69.22-23.49.6-.44-1.45-.59-6.13-.06-7.11A61.55,61.55,0,0,0,303,224.7c3.7-1.22,4.77-2.9,5-7.81.09-3.49.76-34.24-.43-41.54-1.1-7.57-6.8-16.43-19.27-16.43-4.63,0-12.1,1.93-19.22,7.33a2.8,2.8,0,0,0-.7,1.81v.15c.84,3.94.84,8.54.84,15.49,0,4,0,8.17-.05,12.34-.05,8.48-.09,16.48.05,22.53,0,4.12,2.49,5.11,4.5,5.9,1.09.24,1.95.45,2.82.65,1.67.41,3.41.83,6,1.24a11.49,11.49,0,0,1-.1,5.32,4.26,4.26,0,0,1-.75,1.81c-6.46-.22-13.09-.41-22.66-.41-2.9,0-7.63.12-11.81.23-3.39.09-6.59.18-8.41.19a8.24,8.24,0,0,1-.64-3.68,6.38,6.38,0,0,1,.67-3.44l2.57-.47c2.24-.4,4.18-.74,6-1.2,3.16-1,4.35-2.72,4.58-6.75.62-9.4,1.1-36.49-.23-43.27-2.26-10.88-8.45-16.4-18.41-16.4-5.83,0-13.2,2.81-19.22,7.32a5.86,5.86,0,0,0-1.77,4.35c0,3.23,0,7.07,0,11.19,0,13.6-.09,30.53.24,37.85.2,2.26,1,4.94,5.23,5.92.93.27,2.53.53,4.39.84,1.07.18,2.24.37,3.45.59a15.16,15.16,0,0,1-.57,7.15c-1.86,0-4.15-.12-6.77-.23-4-.18-9-.4-14.65-.4-6.68,0-11.33.22-15.06.4-2.51.12-4.68.22-6.85.23" />
              <path d="M396.2,154.49A18.22,18.22,0,0,0,386,157.36c-7.42,4.51-11.2,13.52-11.2,26.76,0,24.78,12.41,42.09,30.18,42.09A19,19,0,0,0,418,221.6c5.46-4.45,8.36-13.55,8.36-26.29,0-24.41-12.13-40.82-30.18-40.82m3.42,80.91c-32.1,0-43.53-23.55-43.53-45.58,0-15.39,6.29-27.42,18.7-35.77a57.11,57.11,0,0,1,28.89-8.54c24.49,0,41.6,17.61,41.6,42.84,0,17.14-6.83,30.68-19.76,39.14-6.21,3.8-17,7.91-25.9,7.91" />
              <path d="M723,154.49a18.17,18.17,0,0,0-10.22,2.87c-7.42,4.51-11.2,13.52-11.2,26.76,0,24.78,12.41,42.09,30.18,42.09a19,19,0,0,0,13.06-4.61c5.46-4.45,8.35-13.55,8.35-26.29,0-24.41-12.12-40.82-30.17-40.82m3.42,80.91c-32.1,0-43.53-23.55-43.53-45.57,0-15.41,6.29-27.43,18.71-35.78a57,57,0,0,1,28.88-8.54c24.49,0,41.6,17.62,41.6,42.83,0,17.16-6.83,30.69-19.76,39.14-6.21,3.81-17,7.92-25.9,7.92" />
              <path d="M614.92,153.65c-9.89,0-16.29,7.81-16.29,19.9s5.51,26.46,21,26.46c2.66,0,7.48-1.18,9.87-3.81,3.6-3.31,6-10.15,6-17.37,0-15.77-7.68-25.18-20.53-25.18m-1.28,83.44a16.29,16.29,0,0,0-8,2c-7.83,5-11.46,10-11.46,15.81,0,5.44,2.11,9.77,6.65,13.61,5.5,4.66,12.92,6.93,22.67,6.93,19.19,0,27.79-10.32,27.79-20.54,0-7.12-3.57-11.89-10.92-14.59-5.66-2.07-15.12-3.21-26.7-3.21m1.28,49c-11.52,0-19.82-2.43-26.91-7.89-6.9-5.32-10-13.22-10-18.68a14.61,14.61,0,0,1,3.78-9.5c2-2.28,6.65-6.55,17.4-13.94a.92.92,0,0,0,.56-.85.89.89,0,0,0-.68-.88c-8.85-3.39-11.52-9-12.33-12,0-.11,0-.28-.09-.47-.25-1.18-.49-2.3,1.12-3.45,1.24-.88,3.22-2.06,5.34-3.31a71.89,71.89,0,0,0,8.59-5.59,1.41,1.41,0,0,0-.36-2.2c-13.1-4.4-19.7-14.13-19.7-29a28.83,28.83,0,0,1,12.1-23.73c5.27-4.17,18.5-9.18,27.07-9.18h.5c8.81.21,13.78,2.06,20.66,4.6a32.84,32.84,0,0,0,12.22,1.94c7.29,0,10.48-2.31,13.22-5a11.47,11.47,0,0,1,.7,3.78,14.22,14.22,0,0,1-2.38,8.68c-1.49,2.07-5,3.57-8.21,3.57-.33,0-.65,0-1-.05a26.94,26.94,0,0,1-5-.83l-.82.29c-.26.38-.09.8.12,1.34a1.7,1.7,0,0,1,.12.33,58.52,58.52,0,0,1,1.19,8.1c0,15.55-6.13,22.32-12.76,27.34a43.56,43.56,0,0,1-22,8.52h0c-.17,0-1,.07-2.56.21-1,.09-2.3.21-2.49.21l-.19,0c-1.44.4-5.2,2.19-5.2,5.52,0,2.76,1.7,6.19,9.83,6.81l5.26.37c10.72.75,24.11,1.68,30.41,3.81a21.06,21.06,0,0,1,14.07,20.27c0,13.95-9.92,27.07-26.53,35.09a57.66,57.66,0,0,1-25.09,5.63" />
              <path d="M565.86,226.06c-4.7-.63-8.13-1.27-12.18-3.17a5.6,5.6,0,0,1-1.5-3c-.43-6.55-.43-25.56-.43-38,0-10.15-1.7-19-6-25.35-5.13-7.19-12.39-11.41-21.79-11.41-8.33,0-19.44,5.7-28.62,13.52-.22.21-1.63,1.55-1.6-.53s.35-6.3.55-9a4.63,4.63,0,0,0-1.4-3.92c-6,3-22.83,7-29.06,7.61-4.54.88-5.69,5.25-.84,6.76l.07,0a41.46,41.46,0,0,1,11,4.84c1.92,1.48,1.71,3.59,1.71,5.28.21,14.15.21,35.91-.43,47.74-.21,4.65-1.5,6.34-4.92,7.19l.32-.11a66.46,66.46,0,0,1-7.91,1.48c-1.07,1.05-1.07,7.18,0,8.45,2.14,0,13-.63,22-.63,12.38,0,18.79.63,22,.63,1.29-1.48,1.71-7.18.86-8.45a45,45,0,0,1-8.77-1.27c-3.41-.84-4.27-2.54-4.48-6.33-.42-9.94-.42-31.06-.42-45.43,0-4,1.06-5.91,2.34-7,4.27-3.8,11.33-6.33,17.52-6.33,6,0,10,1.9,13,4.43A18.1,18.1,0,0,1,533,176c.85,8,.63,24.09.63,38,0,7.61-.63,9.52-3.41,10.36-1.28.63-4.7,1.27-8.76,1.69-1.28,1.27-.86,7.18,0,8.45,5.55,0,12-.63,21.36-.63,11.75,0,19.23.63,22.22.63,1.28-1.48,1.71-7,.86-8.45" />
            </svg>
          </div>
        </div>
        <div className="3 col-span-5 md:col-start-1 md:col-end-3 lg:col-span-1">
          <p className="mt-16 mb-5 text-center text-gray-500 dark:text-gray-200 px-4 tracking-wider">
            Front End Framework:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 place-items-center">
            {/* react */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>React</title>
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fillRule="nonzero"
                  d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="4 col-span-5 md:col-start-4 md:col-end-6 md:col-span-2 lg:col-span-1">
          <p className="mt-16 mb-5 text-center text-gray-500 dark:text-gray-200 px-4 tracking-wider">
            Javascript Runtime:
          </p>
          <div className="px-4 grid grid-cols-1 md:grid-cols-1 place-items-center gap-y-20">
            {/* nodeJS */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Node JS</title>
              <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
            </svg>
          </div>
        </div>
        <div className="5 col-span-5 md:col-span-5 lg:col-span-1">
          <p className="mt-16 mb-5 text-center text-gray-500 dark:text-gray-200 px-4 tracking-wider">
            Version Control:
          </p>
          <div className="px-4 grid grid-cols-1 md:grid-cols-1 place-items-center gap-y-20">
            {/* Git */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              className="esvege text-gray-500 text-7xl dark:text-gray-300 md:text-8xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Git</title>
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
