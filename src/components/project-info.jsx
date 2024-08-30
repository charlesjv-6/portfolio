function ProjectInfo({ details, url, name }) {
    return (
        <div className="website-info">
            <span className="flex-row">
                <h4>{name}</h4>
                <a className="radius-full" href={url} target="_blank" rel="noopener noreferrer">VISIT</a>
            </span>
            <summary>
                {details}
            </summary>
        </div>
    );
}

export default ProjectInfo;