<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Markdown extends Model
{
    use HasFactory;

    protected $table = "markdown";

    protected $fillable = [
        'title',
        'text'
    ];
}
