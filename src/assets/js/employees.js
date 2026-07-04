// ===============================
// Employee Management System
// employee.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Search Employees
    // ===============================

    const searchBox = document.querySelector(".search-box");
    const tableRows = document.querySelectorAll("tbody tr");

    if (searchBox) {

        searchBox.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            tableRows.forEach(row => {

                const text = row.innerText.toLowerCase();

                row.style.display = text.includes(value) ? "" : "none";

            });

        });

    }

    // ===============================
    // Delete Employee
    // ===============================

    const deleteButtons = document.querySelectorAll(".btn-danger");

    deleteButtons.forEach(button => {

        button.addEventListener("click", function () {

            const confirmDelete = confirm("Are you sure you want to delete this employee?");

            if (confirmDelete) {

                this.closest("tr").remove();

                alert("Employee deleted successfully.");

            }

        });

    });

    // ===============================
    // View Employee
    // ===============================

    const viewButtons = document.querySelectorAll(".btn-primary");

    viewButtons.forEach(button => {

        button.addEventListener("click", function () {

            alert("Employee Details page will open here.");

            // Future
            // window.location.href = "employee-details.html";

        });

    });

    // ===============================
    // Edit Employee
    // ===============================

    const editButtons = document.querySelectorAll(".btn-warning");

    editButtons.forEach(button => {

        button.addEventListener("click", function () {

            alert("Edit Employee page will open here.");

            // Future
            // window.location.href = "edit-employee.html";

        });

    });

    // ===============================
    // Department Filter
    // ===============================

    const departmentFilter = document.querySelector(".table-actions select");

    if (departmentFilter) {

        departmentFilter.addEventListener("change", function () {

            const department = this.value.toLowerCase();

            tableRows.forEach(row => {

                const dept = row.cells[4].innerText.toLowerCase();

                if (department === "all departments") {

                    row.style.display = "";

                } else {

                    row.style.display = dept === department ? "" : "none";

                }

            });

        });

    }

    // ===============================
    // Add Employee Button
    // ===============================

    const addEmployeeBtn = document.querySelector(".btn-success");

    if (addEmployeeBtn) {

        addEmployeeBtn.addEventListener("click", () => {

            window.location.href = "add-employee.html";

        });

    }

    // ===============================
    // Sidebar Active Menu
    // ===============================

    const menuItems = document.querySelectorAll(".sidebar ul li");

    menuItems.forEach(item => {

        item.addEventListener("click", function () {

            menuItems.forEach(li => li.classList.remove("active"));

            this.classList.add("active");

        });

    });

});