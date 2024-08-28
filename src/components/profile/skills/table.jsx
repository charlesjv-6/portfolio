import React from "react";

function Table({ data }) {
    return (
        <table className="skill-table">
            <thead>
                <tr>
                    <th>LANGUAGE</th>
                    <th>FRAMEWORK</th>
                    <th>SKILL LEVEL</th>
                    <th>YEAR ACQUIRED</th>
                </tr>
            </thead>
            <tbody>
                { data && data.map(r => {
                    return (
                        <tr>
                            <td>{r.language}</td>
                            <td>{r.framework}</td>
                            <td>{r.level}</td>
                            <td>{r.year}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Table;
