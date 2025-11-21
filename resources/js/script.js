import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ymwxkvuekkjvszmlhmiu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inltd3hrdnVla2tqdnN6bWxobWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MzkzMTAsImV4cCI6MjA3OTExNTMxMH0.ChHxnaEQ4e9XbdsAMatkrLpy7JH4uFcafkSfF4puOjM' // public key ของคุณ
const supabase = createClient(supabaseUrl, supabaseKey)