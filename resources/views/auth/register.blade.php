@extends('layouts.app')

@section('title', 'สมัครสมาชิก')

@section('content')
    @livewire('auth.register')

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script src="script.js"></script>
    
@endsection

