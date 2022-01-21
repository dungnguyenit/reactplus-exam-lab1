import './ListUser.css'

export const ListUser = () => {
    return <div className="ant-list-items">
        <div className="ant-list-item">
            <div className="ant-list-item-meta">
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                        <img src="https://randomuser.me/api/portraits/men/90.jpg"/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>Rhodes</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        Ant Design, a design language for background applications, is refined by Ant UED Team
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a>Edit</a>
                    </li>
                    <li>
                        <a>Remove</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}