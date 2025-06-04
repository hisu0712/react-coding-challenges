import './Header.css'
import { memo } from "react";

const Header = () => {
    return (
        <div className='Header'>
            <h3>오늘은 📅</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};


// export default Header;

// const memoizedHeader = memo(Header); // 최적화된 값을 받아서 export
// export default memoizedHeader;

export default memo(Header);           // 축약 가능