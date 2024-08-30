import React from "react";

function UsedTable({ data, info }) {
    const renderData = () => {
        const chunkSize = 5;
        const chunks = [];
    
        for (let i = 0; i < data.length; i += chunkSize) {
            chunks.push(data.slice(i, i + chunkSize));
        }
    
        return (
            <>
                {chunks.map((chunk, index) => (
                    <tr key={index}>
                        {chunk.map((item, i) => (
                            <td key={i}>{item}</td>
                        ))}
                    </tr>
                ))}
            </>
        );
    };
    
    return (
        <div className="tools-table padded radius-full">
            <h3 className="table-title radius-full">TECH STACK</h3>
            <table className="skill-table">
                <tbody>
                    {renderData()}
                </tbody>
            </table>
        </div>
    );
}

export default UsedTable;
