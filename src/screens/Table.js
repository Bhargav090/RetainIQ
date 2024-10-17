import React, { useState } from "react";
import { Plus, Image as ImageIcon, Trash, MoreVertical } from "lucide-react";
import "./main.css";
import img from "../assets/img1.jpg";

const Table = () => {
  const [rows, setRows] = useState([
    {
      number: 1,
      filters: ["Latest", "Branded"],
      variants: [
        {
          name: "Primary Variant",
          image: img,
          imageName: "Mens Stylish Shirt",
        },
      ],
    },
  ]);

  const [draggedRowIndex, setDraggedRowIndex] = useState(null);
  const [deleteVariantIndex, setDeleteVariantIndex] = useState(null);

  // Adding new row with variants----------------------------
  const addRow = () => {
    const newRow = {
      number: rows.length + 1,
      filters: [],
      variants: rows[0].variants.map((variant) => ({
        ...variant,
        image: null,
        imageName: "",
      })),
    };
    setRows([...rows, newRow]);
  };

  // Adding new variant column to all rows--------------.
  const addVariant = () => {
    const newVariant = `Variant ${rows[0].variants.length + 1}`;
    const newRows = rows.map((row) => ({
      ...row,
      variants: [
        ...row.variants,
        { name: newVariant, image: null, imageName: "" },
      ],
    }));
    setRows(newRows);
  };

  //image upload-----------------------
  const handleImageUpload = (rowIndex, variantIndex, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newRows = [...rows];
        newRows[rowIndex].variants[variantIndex].image = e.target.result;
        newRows[rowIndex].variants[variantIndex].imageName = file.name;
        setRows(newRows);
      };
      reader.readAsDataURL(file);
    }
  };

  //row drag start-----------
  const handleDragStart = (index) => {
    setDraggedRowIndex(index);
  };

  //row drop----------
  const handleDrop = (index) => {
    const newRows = [...rows];
    const draggedRow = newRows.splice(draggedRowIndex, 1)[0];
    newRows.splice(index, 0, draggedRow);
    setRows(
      newRows.map((row, rowIndex) => ({
        ...row,
        number: rowIndex + 1,
      }))
    );
    setDraggedRowIndex(null);
  };

  // Adding product filter---------------------
  const addProductFilter = (rowIndex) => {
    const filterText = prompt("Enter Product Filter:");
    if (filterText) {
      const newRows = [...rows];
      newRows[rowIndex].filters.push(filterText);
      setRows(newRows);
    }
  };

  // Deleting row-----------------------------
  const deleteRow = (rowIndex) => {
    const newRows = rows
      .filter((_, index) => index !== rowIndex)
      .map((row, i) => ({ ...row, number: i + 1 }));
    setRows(newRows);
  };

  // Deleting variant from all rows--------------------
  const deleteVariant = (variantIndexToDelete) => {
    const newRows = rows.map((row) => {
      const newVariants = [];
      for (let i = 0; i < row.variants.length; i++) {
        if (i !== variantIndexToDelete) {
          newVariants.push({
            name: row.variants[i].name,
            image: row.variants[i].image,
            imageName: row.variants[i].imageName,
          });
        }
      }
      return {
        ...row,
        variants: newVariants,
      };
    });
    setRows(newRows);
    setDeleteVariantIndex(null);
  };
  return (
    <div>
      <div className="tablecontainer">
        <table className="dtable">
          <thead>
            <tr>
              <th></th>
              <th>Product Filter</th>
              <th>Primary Variant</th>
              {rows[0].variants.slice(1).map((_, index) => (
                <th key={index} className="variant-header">
                  Variant {index + 1}
                  <MoreVertical
                    className="more-icon"
                    onClick={() => setDeleteVariantIndex(index + 1)}
                  />
                  {deleteVariantIndex === index + 1 && (
                    <div className="delete-variant-option">
                      <button
                        className="delbtn"
                        onClick={() => deleteVariant(index + 1)}
                      >
                        Delete Variant
                      </button>
                    </div>
                  )}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.number}
                draggable
                onDragStart={() => handleDragStart(rowIndex)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(rowIndex)}
                className="table-row"
              >
                <td className="sno">
                  {rows.length > 1 && (
                    <Trash
                      className="delete-icon"
                      onClick={() => deleteRow(rowIndex)}
                    />
                  )}
                  <span>{row.number}</span>
                  <span className="drag-icon"></span>
                </td>
                <td className="product-filter-column">
                  {row.filters.map((filter, filterIndex) => (
                    <div key={filterIndex} className="filter-item">
                      {filter}
                    </div>
                  ))}
                  <button
                    className="add-filter"
                    onClick={() => addProductFilter(rowIndex)}
                  >
                    <Plus /> Add Product Filter
                  </button>
                </td>
                {row.variants.map((variant, variantIndex) => (
                  <td key={variantIndex} className="variant-column">
                    <div className="variant">
                      {variant.image ? (
                        <>
                          <img
                            src={variant.image}
                            alt={variant.name}
                            className="variant-image"
                          />
                          <p className="imgname">{variant.imageName}</p>
                        </>
                      ) : (
                        <label className="image-upload">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageUpload(rowIndex, variantIndex, e)
                            }
                            hidden
                          />
                          <ImageIcon />
                          <span>+ Add Design</span>
                        </label>
                      )}
                    </div>
                  </td>
                ))}
                <td>
                  <button className="add-variant" onClick={addVariant}>
                    <Plus className="addvar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="add-row" onClick={addRow}>
        <Plus />
      </button>
    </div>
  );
};
export default Table;
