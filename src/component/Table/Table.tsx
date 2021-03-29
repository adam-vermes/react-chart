import './Table.css';
import React from 'react';

const Table = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Table</th>
                </tr>

                <tr>
                    <th col-span="1">Header 1</th>
                    <th col-span="1">Header 2</th>
                    <th col-span="1">Header 3</th>
                    <th col-span="1">Header 4</th>
                    <th col-span="1">Header 5</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td data-label="Header1">Row 1, col 1</td>
                    <td data-label="Header2">Row 1, col 2</td>
                    <td data-label="Header3">Row 1, col 3</td>
                    <td data-label="Header4">Row 1, col 4</td>
                    <td data-label="Header5">Row 1, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 2, col 1</td>
                    <td data-label="Header2">Row 2, col 2</td>
                    <td data-label="Header3">Row 2, col 3</td>
                    <td data-label="Header4">Row 2, col 4</td>
                    <td data-label="Header5">Row 2, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 3, col 1</td>
                    <td data-label="Header2">Row 3, col 2</td>
                    <td data-label="Header3">Row 3, col 3</td>
                    <td data-label="Header4">Row 3, col 4</td>
                    <td data-label="Header5">Row 3, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 4, col 1</td>
                    <td data-label="Header2">Row 4, col 2</td>
                    <td data-label="Header3">Row 4, col 3</td>
                    <td data-label="Header4">Row 4, col 4</td>
                    <td data-label="Header5">Row 4, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 5, col 1</td>
                    <td data-label="Header2">Row 5, col 2</td>
                    <td data-label="Header3">Row 5, col 3</td>
                    <td data-label="Header4">Row 5, col 4</td>
                    <td data-label="Header5">Row 5, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 6, col 1</td>
                    <td data-label="Header2">Row 6, col 2</td>
                    <td data-label="Header3">Row 6, col 3</td>
                    <td data-label="Header4">Row 6, col 4</td>
                    <td data-label="Header5">Row 6, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 7, col 1</td>
                    <td data-label="Header2">Row 7, col 2</td>
                    <td data-label="Header3">Row 7, col 3</td>
                    <td data-label="Header4">Row 7, col 4</td>
                    <td data-label="Header5">Row 7, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 8, col 1</td>
                    <td data-label="Header2">Row 8, col 2</td>
                    <td data-label="Header3">Row 8, col 3</td>
                    <td data-label="Header4">Row 8, col 4</td>
                    <td data-label="Header5">Row 8, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 9, col 1</td>
                    <td data-label="Header2">Row 9, col 2</td>
                    <td data-label="Header3">Row 9, col 3</td>
                    <td data-label="Header4">Row 9, col 4</td>
                    <td data-label="Header5">Row 9, col 5</td>
                </tr>

                <tr>
                    <td data-label="Header1">Row 10, col 1</td>
                    <td data-label="Header2">Row 10, col 2</td>
                    <td data-label="Header3">Row 10, col 3</td>
                    <td data-label="Header4">Row 10, col 4</td>
                    <td data-label="Header5">Row 10, col 5</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
