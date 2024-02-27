
const Person = ({name, email}) => {
    return (
        <table>
            <tr>
                <td>Person Name : </td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Person Age : </td>
                <td>{email}</td>
            </tr>
        </table>
    );
};

export default Person;