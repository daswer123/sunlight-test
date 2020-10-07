import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const HeaderAbout = () => {
    return (
        <>
            <h3>Личный профиль</h3>
            <Breadcrumbs aria-label="breadcrumb" style={{fontSize: "14px", color:"white"}}>
                <Link color="inherit" href="#">
                  Главная
                </Link>
                <Link color="inherit" href="#">
                  Профиль
                </Link>
            </Breadcrumbs>
        </>
    )
}

export default HeaderAbout