<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Markdown;

class MarkdownController extends Controller
{
    public function index()
    {
        $markdowns = Markdown::all();
        return response()->json([
            'results' => $markdowns
        ], 200);
    }

    public function show($id = null)
    {
        if ($id) {
            $markdown = Markdown::find($id);
        } else {
            $markdown = Markdown::first();
        }

        if (!$markdown) {
            return response()->json([
                'error' => 'Markdown not found.'
            ], 404);
        }

        return response()->json([
            'results' => $markdown
        ], 200);
    }

    public function store(Request $request)
    {
        try {
            Markdown::create([
                'title' => $request->title,
                'text' => $request->text
            ]);

            return response()->json([
                'message' => 'Succesfully added'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went really wrong!'
            ], 500);
        }
    }

    public function update($id)
    {
        try {
            $markdown = Markdown::find($id);

            if (!$markdown) {
                return $markdown()->json([
                    'message' => 'Task Not Found.'
                ], 404);
            }

            $markdown->save();

            return response()->json([
                'message' => "Task succesfully updated!"
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went really wrong!'
            ], 500);
        }
    }

    public function destroy($id)
    {
        $markdown = Markdown::find($id);

        if (!$markdown) {
            return response()->json([
                'error' => 'Markdown not found.'
            ], 404);
        }

        $markdown->delete();

        return response()->json([
            'message' => 'Tasks succesfully deleted.'
        ], 200);
    }
}
