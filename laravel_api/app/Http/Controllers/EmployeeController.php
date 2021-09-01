<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function getEmployee() {
        return response()->json(Employee::all(), 200);
    }

    public function getEmployeeById($id) {
        $employee = Employee::find($id);
        if (is_null($employee)) {
            return response()->json(['message' => 'Employee Not found'], 404);
        }
        return response()->json($employee::find($id));
    }
}
