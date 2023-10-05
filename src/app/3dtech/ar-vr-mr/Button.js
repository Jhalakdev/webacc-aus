import buttoncss from './buttoncss.module.css'
export default function Button(props) {
    return (<div  className={buttoncss.button}>
        <button style={{backgroundColor:props.back}}>
            <div className={buttoncss.buttoninner}>
                <span style={{color:props.color}}>{props.text}</span>
            </div>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="currentColor" stroke="none">
                    <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
-286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
-291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
-1230 1193 -72 26 -136 26 -207 -1z"/>
                </g>
            </svg>
        </button>
    </div>)
}