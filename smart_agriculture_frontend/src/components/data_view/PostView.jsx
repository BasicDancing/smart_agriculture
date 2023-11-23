import "./DataTable.scss"

const PostView = ({ posts }) => {

    return (
        <>
            <div>
                <h2>Daily Posts</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            {/* Add more headers based on your data structure */}
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                {/* Add more cells based on your data structure */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PostView;