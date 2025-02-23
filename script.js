// Initialize jsPDF
const { jsPDF } = window.jspdf;

// Function to add text to the invoice
function addText() {
    const text = prompt("Enter text:");
    if (text) {
        const invoiceContent = document.getElementById("invoiceContent");
        const p = document.createElement("p");
        p.innerText = text;
        invoiceContent.appendChild(p);
    }
}

// Function to add a table to the invoice
function addTable() {
    const rows = prompt("Enter number of rows:");
    const cols = prompt("Enter number of columns:");
    if (rows && cols) {
        const invoiceContent = document.getElementById("invoiceContent");
        const table = document.createElement("table");
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";

        for (let i = 0; i < rows; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement("td");
                cell.innerText = `Row ${i + 1}, Col ${j + 1}`;
                cell.style.border = "1px solid #000";
                cell.style.padding = "5px";
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        invoiceContent.appendChild(table);
    }
}

// Function to download the invoice as PDF
function downloadPDF() {
    const doc = new jsPDF();
    const invoiceContent = document.getElementById("invoiceContent");
    doc.html(invoiceContent, {
        callback: function (doc) {
            doc.save("invoice.pdf");
        },
        x: 10,
        y: 10,
    });
}
