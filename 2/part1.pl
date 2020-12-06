#!/usr/bin/perl

my $filename = 'input.txt';
open(my $fh, '<:encoding(UTF-8)', $filename);

my $result = 0;
while (my $row = <$fh>) {
  chomp $row;
  my @parts = split / /, $row;
  my @occurs = split /-/, $parts[0];

  my $min = $occurs[0];
  my $max = $occurs[1];
  my $char = substr($parts[1], 0, 1);
  my $password = $parts[2];

  my $count = () = $password =~ /\Q$char/g;

  if ($count >= $min && $count <= $max) {
    $result++;
  }
}

print $result;
