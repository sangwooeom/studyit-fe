import routes from "../routes"
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
            <h1 style={{textAlign: 'center'}}>색인 페이지</h1>
            <table style={{width: "1000px", textAlign: 'center', margin: "0 auto", border: "1px solid black", borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <td style={{border: "1px solid black", fontWeight: '700'}}>번호</td>
                        <td style={{border: "1px solid black", fontWeight: '700'}}>페이지명</td>
                        <td style={{border: "1px solid black", fontWeight: '700'}}>경로</td>
                    </tr>
                </thead>
                <tbody>
                    {routes.filter((route) => {
                        return route.name != "색인 페이지";
                    }).map((route, index) => (
                        <tr key={index}>
                            <td style={{border: "1px solid black"}}>{index + 1}</td>
                            <td style={{border: "1px solid black"}}>{route.name}</td>
                            <td style={{border: "1px solid black"}}><Link to={route.path}>바로가기</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}